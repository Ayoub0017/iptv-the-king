const fs = require('fs');
const path = require('path');
const os = require('os');

const srcDir = path.join(os.homedir(), '.gemini', 'antigravity', 'brain', '8a828f18-0c96-48fb-ba40-33607f19066d');
const destDir = path.join(__dirname, 'public');

const files = fs.readdirSync(srcDir);

files.forEach(file => {
  if (file.startsWith('3_month_iptv_subscription_uk_')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, '3-month-iptv-subscription.png'));
  } else if (file.startsWith('6_month_iptv_subscription_uk_')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, '6-month-iptv-subscription.png'));
  } else if (file.startsWith('12_month_iptv_subscription_uk_')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, '12-month-iptv-subscription.png'));
  }
});
console.log('Images copied successfully.');
