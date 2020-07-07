import { useApiUrl } from "@/config/url.js";
import CommonConfig from "@/config/common.js";
import SystemConfig from "@/config/system.js";

export default {
  ...CommonConfig,
  ...SystemConfig,
  apiUrl: useApiUrl,
  corporation: "公司名教育科技（北京）有限公司",
  siteName: "ElementUi管理后台"
};
