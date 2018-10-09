import { Feedback, FeedbackType, FeedbackPosition } from 'nativescript-feedback';

export default function feedback(title, message, type) {
    switch(type) {
        case "success":
            Feedback.success({
                title: title,
                message: message,
                duration: 4000
            });
            break;
        case "error": 
            Feedback.error({
                title: title,
                message: message,
                onTap: () => { Feedback.hide() }
            });
            break;
        default:
            Feedback.info({
                title: title,
                message: message,
                duration: 4000
            });
            break;
            // Feedback.show({
            //     title: title,
            //     titleColor: new Color("white"),
            //     position: FeedbackPosition.Top,
            //     type: FeedbackType.Success,
            //     message: message,
            //     messageColor: new Color("white"),
            //     duration: 4000,

            // })
    } 
}