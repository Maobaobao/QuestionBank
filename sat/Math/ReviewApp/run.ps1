# ### Set the current location to the directory of the script
Set-Location $PSScriptRoot

# # Get-NetIPAddress -AddressFamily IPv4

# $hostIP=Get-NetIPAddress -AddressFamily IPv4 | Where-Object -FilterScript { $_.InterfaceAlias -Eq "以太网" }
# $hostIP.IPAddress

# Similarly, this cmdlet can be used to get information about IP address configuration for IP addresses that have an Infinite ValidLifetime.
# Get-NetIPAddress | Where-Object -FilterScript { $_.ValidLifetime -Eq ([TimeSpan]::MaxValue) }

# docker build -t sqlserver2022-fulltext -f Dockerfile.sqlserver .

# docker run -d --name sqlserver2022 -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=!QAZ2wsx1979" -e "MSSQL_AGENT_ENABLED=True" -p 1433:1433 -v D:\\database:/database  sqlserver2022-fulltext:latest

# # Install Python dependencies
# pip install --no-cache-dir -r requirements.txt

### Set the current location to the directory of the script
# Set-Location $PSScriptRoot

# Install Python dependencies
# pip install --no-cache-dir -r requirements.txt

python app.py


# C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe app.py

# C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe  test_email_utils.py --manual

# C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe  test_email_utils.py --unit

# C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe  test_gmail_smtp.py

# C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe  test_email_utils.py --simple
