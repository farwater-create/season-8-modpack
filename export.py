#!/usr/bin/env python3
import shutil
import subprocess
import sys
import os
import urllib3
import time
http = urllib3.PoolManager()
VERSION = "0.0.3"
BOOTSTRAP_INSTALLER_URL = "https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v%s/packwiz-installer-bootstrap.jar" % VERSION

if shutil.which("go") is None:
    print("Go is not installed, please follow the instructions to install go for your os at https://go.dev/doc/install")
    sys.exit()

if shutil.which("java") is None:
    print("Java is not installed, please install java. https://adoptium.net/")
    sys.exit()

if shutil.which("packwiz") is  None:
    print("packwiz not found, installing")
    subprocess.run(["go", "install", "github.com/packwiz/packwiz@latest"])

if len(sys.argv) <= 1:
    print("You must specify \"server\" or \"client\" as an argument")
    sys.exit()

if not os.path.isfile("./packwiz-installer-bootstrap.jar"):
    print("packwiz-installer is not installed, installing")
    with open ('./packwiz-installer-bootstrap.jar', 'wb') as output:
        r = http.request("GET", BOOTSTRAP_INSTALLER_URL)
        output.write(r.data)


export_type = sys.argv[1]

if export_type == "server":
    print("exporting server pack...")
    print("running local dev server...")
    server = subprocess.Popen(["packwiz", "serve"])
    # lol
    time.sleep(3)
    subprocess.run(["java", "-jar", "packwiz-installer-bootstrap.jar","-g","-s","server","http://localhost:8080/pack.toml"])
    server.terminate()
else:
    print("exporting client pack")
    subprocess.run(["packwiz", "modrinth", "export"])