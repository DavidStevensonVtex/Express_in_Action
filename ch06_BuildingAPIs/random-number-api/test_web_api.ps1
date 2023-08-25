Invoke-WebRequest -Method GET    -Uri "http://localhost:3000" | Select-Object StatusCode, StatusDescription, RawContentLength, Content
Invoke-WebRequest -Method POST   -Uri "http://localhost:3000" | Select-Object StatusCode, StatusDescription, RawContentLength, Content
Invoke-WebRequest -Method PUT    -Uri "http://localhost:3000" | Select-Object StatusCode, StatusDescription, RawContentLength, Content
Invoke-WebRequest -Method DELETE -Uri "http://localhost:3000" | Select-Object StatusCode, StatusDescription, RawContentLength, Content

Invoke-RestMethod -Method GET    -Uri "http://localhost:3000" 
Invoke-RestMethod -Method POST   -Uri "http://localhost:3000" 
Invoke-RestMethod -Method PUT    -Uri "http://localhost:3000" 
Invoke-RestMethod -Method DELETE -Uri "http://localhost:3000" 


