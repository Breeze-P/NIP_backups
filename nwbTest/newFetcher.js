import download from 'download';
import fs from 'fs'
 
// download a file and save it to ./tmp/file.tmp
download('http://api.brain-map.org/api/v2/atlas_image_download/100883869?downsample=4&annotation=true', './tmp').then(data => {
  fs.writeFileSync('source1.jpg', data);
});