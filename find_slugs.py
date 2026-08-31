import urllib.request
import json

url = "https://raw.githubusercontent.com/simple-icons/simple-icons/master/_data/simple-icons.json"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())
    
icons = data['icons']

targets = {
    "Magento": "magento", "WordPress": "wordpress", "Shopify": "shopify", "Webflow": "webflow", "HubSpot": "hubspot", "BigCommerce": "bigcommerce",
    "Drupal": "drupal", "Joomla!": "joomla", "WooCommerce": "woocommerce", "NopCommerce": "nopcommerce",
    "HTML": "html", "CSS": "css", "Javascript": "javascript", "Angular": "angular", "React": "react",
    ".NET MVC": "dotnet", "Microsoft .NET": "dotnet", "C#": "c sharp", "REST API": "api", "Microservices": "micro",
    "Docker": "docker", "Python": "python", "PHP": "php", "Django": "django",
    "SQL Server": "sql", "Power BI": "power", "Azure Data Lake": "azure", "MySQL": "mysql", "PostgreSQL": "postgres",
    "Blob Storage": "azure", "Amazon S3": "amazon", "Amazon SES": "amazon", "SendGrid": "sendgrid", "ClickSend": "click",
    "Firebase": "firebase", "Azure": "azure", "AWS": "amazon", "Google Cloud": "google", "DevOps": "devops",
    "Power Platform": "power",
    "iOS": "ios", "Android": "android", "Flutter": "flutter", "React Native": "react", "Swift": "swift", "Kotlin": "kotlin",
    "Figma": "figma", "Sketch": "sketch", "Adobe XD": "adobe", "Miro": "miro", "Notion": "notion"
}

results = {}
for name, search in targets.items():
    found = []
    for icon in icons:
        if search.lower() in icon['title'].lower() or search.lower() in icon['slug'].lower():
            found.append(icon['slug'])
    results[name] = found[:3]

for name, res in results.items():
    print(f"{name}: {res}")
