import os
from subprocess import check_output
from time import sleep

for i in range(10):
    pid = os.getpid()
    print(pid)
    # command -> ps aux | grep {pid}
    sleep(1)