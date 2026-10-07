const _clientConfig = require('../../clientconfigdata/clientDbobjects');
const dateFormat = require('dateformat');
function floatpointsprints(amount) {
    return Number(amount).toLocaleString('en-IN',{
        minimumFractionDigits:2,
        maxFractionDigits:2,
    })
   
}

function checkDataType(dataType, value) {
    if (dataType === 'string') {
        return typeof value === 'string' ? value : value;
    }
    if (dataType === 'text') {
        return typeof value === 'text' ? value : value;
    }
    else if (dataType === 'number') {        
        const numVale = parseFloat(value).toFixed(2);
        return isNaN(numVale) ? null : numVale
    }
    else if (dataType === 'date') {
        const date = (value != null) ? dateFormat(value, 'dd-mmm-yyyy') : '';
        return date
    }
    else if (dataType === 'Dob') {
        const date = (value != null) ? dateFormat(value, 'dd-mmm-yyyy') : '';
        return date
    }
    else if (dataType === 'time') {
        return dateFormat(value, 'HH:mm:ss').toDate()
    }
    else if (dataType === 'month') {
        return dateFormat(value, 'YYYY-MM').toDate()
    }
    else if (dataType === 'datetime') {
        if (value != null) {
            let utcDateChange = value.replace('T', ' ')
            return dateFormat(utcDateChange, 'dd-mmm-yyyy hh:MM TT');
        }
        else {
            return '';
        }
    }
    else if (dataType === 'amount') {
        if (value != null) {
            let valueChange =  floatpointsprints(value);
            return valueChange
        }
        else {
            return '';
        }
    }
    else if (dataType === 'boolean') {
        return value
    }
    else {
        return value;
    }
}
module.exports = {
    checkDataType: (dataType, value) => checkDataType(dataType, value)
}