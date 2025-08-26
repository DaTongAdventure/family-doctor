window.doctorApi = {

    doChat: function(bo) {
        return instance({
            url: '/deepseek/ai/v3/doctor/stream',
            method: 'post',
            data: bo
        })
    },

    getRecords: function(who) {
        return instance({
            url: '/deepseek/getRecords?who=' + who,
            method: 'get',
        })
    },

}



