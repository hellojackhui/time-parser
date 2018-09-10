function dateParser(dataType) {
    return pattern(dataType)
}

function pattern(dateType) {
  var date = new Date()
  var dateParams = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  if (/(Y+)/.test(dateType)) {
    dateType = dateType.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var i in dateParams) {
    if (new RegExp('(' + i + ')').test(dateType)) {
      dateType = dateType.replace(RegExp.$1, (RegExp.$1.length === 1) ? (dateParams[i]) : (('00' + dateParams[i]).substr(('' + dateParams[i]).length)))
    }
  }
  return dateType
}

module.exports = dateParser