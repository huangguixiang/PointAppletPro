  //定义公共url
const baseUrl = "https://api.midiandz.com/api"
let ajaxTImes = 0
let token=wx.getStorageSync('Authori-zation')
// console.log(token)
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
      header: {
        "Content-Type": "application/json;charset=UTF-8",
        'Authori-zation':token
      },
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
        "Content-Type": "application/json;charset=UTF-8",
        'Authori-zation':token

      },
      // header: {
                   //token要不要放请求头 请求头的类型
      // },
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