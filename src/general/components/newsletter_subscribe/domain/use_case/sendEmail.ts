import SliderImagesFakeRepository from "../../../../../modules/home_page/data/repository/sliderImagesFakeRepository";


const SendEmail = (sliderImagesFakeRepository: SliderImagesFakeRepository) =>
    async (email:string): Promise<string> => {
        try {
            const sendEmail = await sliderImagesFakeRepository.sendEmail(email);
            return sendEmail || '';
        } catch (e) {
            throw e;
        }
    }

export default SendEmail;