import page from "page";
import Store from "./classes/Store";

export const currentRoute = new Store(null);

export default function registerRoutes(routes) {
    page.start();
    for (const path in routes) {
        if (routes[path]?.component) {
            page(path, (ctx, next) => {
                if (typeof routes[path]?.beforeload === "function") {
                    const response = routes[path]?.beforeload(ctx, routes[path]);
                    if (response === false) return next();
                }
                currentRoute.set({
                    path: ctx.path,
                    pathname: ctx.pathname,
                    params: ctx.params,
                    queryString: ctx.querystring,
                    component: routes[path].component
                });
                if (typeof routes['/']?.onload === "function") {
                    routes['/']?.onload(ctx, routes['/']);
                }
            });
        }
    }
    const completePath = location.href.replace(new RegExp(`^${location.origin}`), '');
    page.replace(completePath);
}

export function goto(path: string, replace = false) {
    if (path) {
        return replace ? page.replace(path) : page.redirect(path);
    } else {
        throw Error('invalid path');
    }
}

window['page'] = page;
window['goto'] = goto;
