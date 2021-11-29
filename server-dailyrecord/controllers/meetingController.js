// Dependencies
const MeetingService = require('../services/meetingService');
const { response } = require('../app');
const { createProject } = require('../services/projectService');

class MeetingController{
    async getMeetings(request, response){ // Get all the meetings for the parameter project
        const meetings = await MeetingService.getMeetings(request.params.projectId);

        response.status(200).send(meetings);
    }

    async getMeeting(request, response){ // Get the meeting related of the parameter id
        const meeting = await MeetingService.getMeeting(request.params.meetingId);
        
        response.status(200).send(meeting);
    }

    async createMeeting(request, response){ // Add one stamp with the parameters informations

        const duration = request.body.duration;
        const description = request.body.name;
        const blob = request.body.blob;
        const file = request.body.file;
        const nameFile = request.body.nameFile;
        const date = request.body.date;
        const projectId = request.params.id; // Get the id of the project

        const meetingCreated = await MeetingService.createMeeting(duration, description, '', '01-02-03', projectId, blob, nameFile);

        if(meetingCreated){
            response.status(200).send();
        }

        else{
            response.status(418).send();
        }
    }

    async setMeeting(request, response){ // Set the meeting that correspond to the id parameter
        const id = request.body.id;
        const duration = request.body.duration;
        const description = request.body.description;
        const file = request.body.file;
        const date = request.body.date;

        const meetingUpdated = await MeetingService.setMeeting(id, duration, description, file, date);

        if(meetingUpdated){
            response.status(200).send();
        }

        else{
            response.status(418).send();
        }
    }
}

module.exports = new MeetingController