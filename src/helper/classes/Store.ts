import { writable, get, Writable } from "svelte/store";

export default class Store implements Writable<any> {
    set: any;
    update: any;
    subscribe: any;
    constructor(value: any) {
        const { set, update, subscribe } = writable(value);
        this.set = set;
        this.update = update;
        this.subscribe = subscribe;
    }
    get() {
        return get(this);
    }
    setProp(propName: string, value: any) {
        this.update(state => {
            if (typeof state === "object") {
                state[propName] = value;
            }
            return state;
        })
    }
    getProp(propName: string) {
        const state = this.get();
        if (typeof state === "object") {
            return state[propName];
        }
    }
}