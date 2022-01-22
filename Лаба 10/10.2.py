from collections import namedtuple
import time
import asyncio
from concurrent.futures import FIRST_COMPLETED
from aiohttp import ClientSession
import socket


Service = namedtuple('Service', ('name', 'url', 'ip_attr'))

SERVICES = (
    Service('ipify', 'https://api.ipify.org?format=json', 'ip'),
    Service('ip-api', 'http://ip-api.com/json', 'query')
)

async def fetch_ip(service, session): # получение ip
    async with session.get(service.url) as response:
        data = await response.json()
        return data[service.ip_attr]



async def asynchronous():# создание футур для сервисов
                         # используйте FIRST_COMPLETED
    async with ClientSession() as session:
        tasks = [asyncio.create_task(fetch_ip(service, session)) for service in SERVICES]
        done, pending = await asyncio.wait(tasks, timeout=None, return_when=FIRST_COMPLETED)
        for future in done:
            print(future.result())


asyncio.run(asynchronous())
