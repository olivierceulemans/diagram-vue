import { App } from "vue";

import VButton from "./VButton.vue";
import VCkbox from "./VCkbox.vue";
import VInput from "./VInput.vue";
import VMessage from "./VMessage.vue";
import VModal from "./VModal.vue";
import VSelect from "./VSelect.vue";

export default {
  install: (app: App, options: any) => {
    app.component("VButton", VButton);
    app.component("VCkbox", VCkbox);
    app.component("VInput", VInput);
    app.component("VMessage", VMessage);
    app.component("VModal", VModal);
    app.component("VSelect", VSelect);
  }
};
