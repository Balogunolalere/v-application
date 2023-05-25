/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const StepOne = () => {
    const [data, setData] = useState<any>({
        salary: '', jobDescription: '', netWorth: '', employerInfo: '', spendingAmount: '', lastMonthSpending: '', someonePaying: '', whoIsPaying: '', nameOfWhoIsPaying: '', amountTherPayForYourVisit: '', whyTheyAreHelping: '', dateYouPlanToArriveUK: '', languageToComunicate: '', reasonForVisit: '',
        reasonForHoliday: '', detailsOfVisit: '', haveDependance: '', relationshipWithDependance: '', dependaceFullName: '', 
    });

    return (
        <section className='p-6'>
            <h1 className='text-lg font-bold'>Travelers Details</h1>
            <p className='text-sm color-[#757575] mt-1 opacity-[.6]'>Kindly fill out the your correct information in this
                questionnaire.</p>
            <form className='mt-6'>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>How much do you earn each month - after tax? </label>
                    <input value={data.salary} name="salary" className='h-11 border rounded bg-[#F6F6F6]' />
                </div>

                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Describe your job (as brief as possible)</label>
                    <textarea value={data.jobDescription} name="jobDescription" className='h-24 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Do you have another income, investment, or any savings? (If yes, please specify and state value in GBP)</label>
                    <input name="netWorth" value={data.netWorth} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>State name, address, and telephone number of your employer if applicable</label>
                    <input name="employerInfo" value={data.employerInfo} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>How much money are you personally planning to spend on your visit to the UK?</label>
                    <input name="spendingAmount" value={data.spendingAmount} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>

                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>What is the total amount of money you spend each month? </label>
                    <input name="lastMonthSpending" value={data.lastMonthSpending} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Will anyone be paying towards the cost of your visit?</label>
                    <select name="someonePaying" value={data.someonePaying} className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value=''>Select</option>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>If yes, who is paying towards the cost of your visit? Someone I know (family or friend/My employer or company/Another company or organization</label>
                    <input name="whoIsPaying" value={data.whoIsPaying} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Full Name and Address of the Person Paying Towards the Cost of your Visit</label>
                    <input name='nameOfWhoIsPaying' value={data.nameOfWhoIsPaying} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>

                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>How much money will they be paying towards your visit? </label>
                    <input name="amountTherPayForYourVisit" value={data.amountTherPayForYourVisit} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Why are they helping to pay for your visit?</label>
                    <input name="whyTheyAreHelping" value={data.whyTheyAreHelping} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Date you plan to arrive in the UK</label>
                    <input name="dateYouPlanToArriveUK" value={data.dateYouPlanToArriveUK} type='date' className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>We may have to talk to you about your application. Which language would you prefer to use?</label>
                    <input name="languageToComunicate" value={data.languageToComunicate} type='date' className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>What is the main reason for your visit to the UK?</label>
                    <select name="reasonForVisit" value={data.reasonForVisit} className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='tourism'>Tourism</option>
                        <option value='medical'>Medical</option>
                        <option value='business'>Business</option>
                    </select>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>What is the main reason for your holiday visit to the UK?</label>
                    <select name="reasonForHoliday" value={data.reasonForHoliday} className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='tourism'>Tourism</option>
                        <option value='visiting friends'>Visiting Friends</option>
                        <option value='visiting family'>Visiting Family</option>
                    </select>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Give details of the main purpose of your visit and anything else you plan to do on your trip</label>
                    <textarea name="detailsOfVisit" value={data.detailsOfVisit} className='h-24 border rounded bg-[#F6F6F6]'></textarea>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Does anyone rely on you for financial support? Include both those travelling with you and those who are not?</label>
                    <select name="haveDependance" value={data.haveDependance} className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='mb-6 mt-11 flex flex-col'>
                    <h2 className='text-lg font-semibold mb-2'>If "Yes," you should use your dependent’s passport, if they have one, to complete this section</h2>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>State their relationship to you?</label>
                    <input name="relationshipWithDependance" value={data.relationshipWithDependance} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Give names of your dependent in full</label>
                    <input name="dependaceFullName" value={data.dependaceFullName} className='h-11 border rounded bg-[#F6F6F6]' />
                </div>

            </form>
        </section>
    )
}

export default StepOne;







