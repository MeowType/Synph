import { ISyntax, EventsKey, CallEvents } from "../synph";

export function getOn(syn: ISyntax): CallEvents {
    const r_obj: CallEvents = {}
    for (const key in syn) {
        if (key.substr(0, 2) === 'on') {
            const eo: Set<React.DOMAttributes<HTMLElement>[EventsKey]> = syn[key].eventlist
            r_obj[key] = function () {
                eo.forEach(cb => cb.apply(this, arguments))
            }
        }
    }
    return r_obj
}