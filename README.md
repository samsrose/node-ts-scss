# svelte app

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit imsamtar/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Register Routes

```javascript
import registerRoutes from "./helper/registerRoutes";

const routes = {
    '/': {
        component: Dashboard,
        beforeload: (ctx, routeOptions) => {
            if(!auth){
                return false;
            }
        },
        onload: (ctx, routeOptions) => { 
            fetchData();
        }
    },
}

registerRoutes(routes);
```