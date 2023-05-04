import fetch from "node-fetch"
const url = 'http://api.brain-map.org/api/v2/atlas_image_download/100883869?downsample=4&annotation=true'

// fetch(url).then((data) => {console.log(data.json())})



// type = image/jpeg
function download(
    data,
    name = '',
    { type = 'text/plain', encode, timestamp = false } = {}
  ) {
  
    return new Promise((resolve, reject) => {
      if (!data) return
  
      try {
        let blob
        const a = document.createElement('a')
        a.style.display = 'none'
        a.download = name + (timestamp ? `_${Date.now()}` : '')
  
        if (/^https?|ftp|data:/.test(data)) {
          a.href = data
        } else {
          blob =
            data instanceof Blob
              ? data
              : new Blob(data instanceof Array ? data : [data], {
                  type: type + (encode ? ';charset=' + encode : '')
                })
          a.href = URL.createObjectURL(blob)
        }
  
        setTimeout(() => {
          a.click()
          setTimeout(() => {
            a.remove()
            resolve()
            if (blob instanceof Blob) {
              setTimeout(() => {
                URL.revokeObjectURL(blob)
              }, 1000)
            }
          }, 1)
        }, 0)
      } catch (error) {
        reject(error)
      }
    })
  }

// download(url)

const exportFile = (data, fileName, _this)=>{
// 地址不存在时，禁止操作
      if(!data)return;
      // 下载文件并保存到本地
      const callback = (data)=>{
 // 创建a标签，使用 html5 download 属性下载，
        const link = document.createElement('a');
 // 创建url对象
        const objectUrl = window.URL.createObjectURL(new Blob([data]));
        link.style.display='none';
        link.href=objectUrl;
// 自定义文件名称， 
fileNamelink.download = fileName; 
document.body.appendChild(link); 
link.click();
    // 适当释放url
        window.URL.revokeObjectURL(objectUrl);
      };
      // 把接口返回的url地址转换为 blob
      const xhr = new XMLHttpRequest();
      xhr.open('get', data, true);
      xhr.responseType = 'blob';
      xhr.onload = ()=> {
    // 返回文件流，进行下载处理
        callback(xhr.response);
      };
      xhr.send(); // 不要忘记发送
    };
     
    // ie和浏览器兼容模式会有问题，可以用下面代码调试。
    try{
        exportFile(url); // 调用方式
      }catch(err){
        // 兼容模式下，IE
        const exportBlob = new Blob([data]);
        if (navigator.userAgent.indexOf('Trident') > -1) {
          window.navigator.msSaveBlob(data, fileName);
        } else {
          exportFile(url); // 调用方式
        }
      };

