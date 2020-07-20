  //定义公共url
const baseUrl = ""
let ajaxTImes = 0
export const get=(params)=>{
  ajaxTImes++
  wx.showLoading({
    title: '拼命加载中',
    mask:true
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl+params.url,
      method:"GET",
      success:(res)=>{
        resolve(res);
      },
      fail:(err)=>{ 
        reject(err);
      },
      complete:()=>{
        ajaxTImes--
        if(ajaxTImes==0){
          wx.hideLoading()
        }
      }
    });
  })
}
export const post=(params)=>{
  ajaxTImes++
  wx.showLoading({
    title: '拼命加载中',
    mask:true
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl+params.url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' 
      },
      method:"POST",
      success:(res)=>{
        resolve(res);
      },
      fail:(err)=>{ 
        reject(err);
      },
      complete:()=>{
        ajaxTImes--
        if(ajaxTImes==0){
          wx.hideLoading()
        }
      }
    });
  })
}