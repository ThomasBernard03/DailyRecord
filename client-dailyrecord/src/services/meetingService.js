//#region all imports
    import ApiService from '../services/apiService';
//#endregion

export default class MeetingService{
    
    async createMeeting(duration, name, audioBlob, date, projectId){
        
        const resultCall = await ApiService.sendPostWithToken('project/' + projectId + '/meeting', {
            duration,
            name,
            blob : audioBlob,
            date,
            projectId
        }, true);

        // var formData = new FormData();
        // formData.append('audio', audioBlob, 'recording.mp3')

        // const url = ApiService.baseUrl + 'project/' + projectId + '/meeting';
        
        // const result = await fetch(url, {
        //     method: 'POST',
        //     body: formData
        // });
        

        return resultCall;
    }


    async getMeeting(projectId, meetingId){
        const resultCall = await ApiService.sendGetWithToken('project/' + projectId + '/meeting/' + meetingId, true);
        return resultCall.data;
    }

}