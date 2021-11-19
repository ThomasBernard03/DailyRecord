// Dependencies
const MeetingModel = require('../models/meetingModel');

class MeetingService{
    async getMeetings(projectId){ // Get all the meetings for the parameter project
        const meetings = await MeetingModel.findAll({
            where:{
                projectId: projectId
            }
        });

        return meetings;
    }

    async getMeeting(meetingId){ // Get the meeting related of the parameter id
        const meeting = await MeetingModel.findByPk(meetingId);

        return meeting;
    }

    async createMeeting(id, duration, description, file, date, projectId){ // Add one meeting with the parameters informations
        try{
            const result = await MeetingModel.create({
                id: id,
                duration: duration,
                description: description,
                file: file,
                date: date,
                projectId: projectId
            });

            return true;
        } catch{
            return false;
        }
    }

    async setMeeting(id, duration, description, file, date){ // Set the meeting that correspond to the id parameter
        try{
            const result = await MeetingModel.update({
                duration: duration,
                description: description,
                file: file,
                date: date
            },{
                where: {
                    id: id
                }
            });

            return true;
        } catch{
            return false;
        }
    }
}

module.exports = new MeetingService();