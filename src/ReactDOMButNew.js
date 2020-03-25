import ReactReconciler from "react-reconciler";

const reconciler = ReactReconciler({
  /* config for how to talk to the host environment */
  supportsMutation: true,

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    // console.log(type, props);
    let el = document.createElement(type);
    ["alt", "className", "href", "rel", "src", "target"].forEach(k => {
      if (props[k]) el[k] = props[k];
    });

    if (props.onClick) {
      el.addEventListener("click", props.onClick);
    }

    if (props.class) {
      el.className = props.class;
    }

    if (props.thunderMagicHorse) {
      el.style.backgroundColor = props.thunderMagicHorse;
    }

    return el;
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return document.createTextNode(text);
  },

  appendChildToContainer(container, child) {
    container.appendChild(child);
  },

  appendChild(parent, child) {
    parent.appendChild(child);
  },

  appendInitialChild(parent, child) {
    parent.appendChild(child);
  },

  removeChildFromContainer(container, child) {
    container.removeChild(child);
  },

  removeChild(parent, child) {
    parent.removeChild(child);
  },

  insertInContainerBefore(container, child, before) {
    container.insertBefore(child, before);
  },

  insertBefore(parent, child, before) {
    parent.insertBefore(child, before);
  },

  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {
    let payload;
    if (oldProps.thunderMagicHorse !== newProps.thunderMagicHorse) {
      payload = { newThunderMagicHorse: newProps.thunderMagicHorse };
    }
    return payload;
  },

  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    if (updatePayload.newThunderMagicHorse) {
      instance.style.backgroundColor = updatePayload.newThunderMagicHorse;
    }
  },

  finalizeInitialChildren() {},

  getChildHostContext() {},

  getPublicInstance() {},

  getRootHostContext() {},

  prepareForCommit() {},

  resetAfterCommit() {},

  shouldSetTextContent() {
    return false;
  }
});

const ReactDOMButNew = {
  render(whatToRender, div) {
    let container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container, null, null);
  }
};

export default ReactDOMButNew;
