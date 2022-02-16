import base from "@/components/base"

export default {
  install: (app) => {
    for (const key of Object.keys(base)) {
      app.component(base[key].name, base[key]);
    }
  },
};
