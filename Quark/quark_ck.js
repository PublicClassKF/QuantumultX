// QuanX夸克网盘Cookie提取脚本 v1.0
// 作者：K.
// 适用：Quantumult X
// 功能：提取夸克网盘核心Cookie并弹窗显示

const url = $request.url;
const headers = $request.headers;
const cookie = headers['Cookie'] || headers['cookie'];

// 监听夸克网盘关键请求（包含用户信息或文件列表的请求）
if (url.includes('pan.quark.cn') && (url.includes('/list') || url.includes('/growth/info') || url.includes('/account/token')) && cookie) {
    
    // 格式化完整Cookie（保留全部必要参数）
    const fullCookie = cookie;
    
    // 生成提取结果
    let result = `✅ 夸克网盘Cookie提取成功\n`;
  
    result += `📋 完整Cookie：\n\n${fullCookie}\n\n`;
    
    // 弹窗显示结果（Quantumult X专属）
    $notify('夸克网盘Cookie提取', '', result);
    
    
}

$done({});
