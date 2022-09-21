# 🚧 Dockerize
*Process of packing, deploying, and running application using Docker containe.*

-----
## 👨🏻‍💻 **How it's works :** 

#### To get inside the folder that conatins the script :
- cd "Folder-Name"
#### Run this command to start the container :
- docker-compose up -d

"PIC"

##### Once It completed, You can go to "http://0.0.0.0:8081/"

"PIC""

##### And you can start with mongoDB localy

----

### 🎏 **The Folder Contains :**
```
- docker-compose.yaml
- init.d
    - mongo-init.js
```
------

### 🤖 **Inside this folder :**

##### **There is a script that running inside the container once you "docker-compose up" :**
- **init.d**
    - **mongo-init.js**


💡 *Inside this script you can create the users that you want to be on the mongoDB as default like Users, etc..*


