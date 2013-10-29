if (!document.createElementNS) {
    document.createElementNS = function(ns, name) {
        return document.createElement(name);
    };
}
