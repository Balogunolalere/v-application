/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const StepOne = () => {
    return (
        <section className='p-6'>
            <h1 className='text-lg font-bold'>Travelers Details</h1>
            <p className='text-sm color-[#757575] mt-1 opacity-[.6]'>Kindly fill out the your correct information in this
                questionnaire.</p>
            <form className='mt-6'>   
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Will you be travelling to the UK as part of an organized group?</label>
                    <select className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>If "Yes", Company or Group Name</label>
                    <input className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Will you be travelling to the UK with someone who is not your partner, spouse, or dependent?</label>
                    <select className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>If "Yes", Relationship to you, Given Names and Family Name, and Country of Nationality</label>
                    <input className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Do you have an address for where you are going to stay in the UK?</label>
                    <select className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Where are you planning to stay in the UK?</label>
                    <input className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Enter the address of where you will be staying</label>
                    <input className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>When will you arrive there?</label>
                    <input type='date' className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>When will you leave there?</label>
                    <input type='date' className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Have you been granted a UK visa in the past 10 years?</label>
                    <select className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Date of visa issue</label>
                    <input type='date' className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-12 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Have you been to the UK in the past 10 years?</label>
                    <select className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='mb-12 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>If Yes, how many times have you been to the UK in the past 10 years?</label>
                    <input className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                {/* <div className='mb-12 flex flex-col'>
                     <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='text-xs font-semibold text-left py-2'>Purpose (Tourist/Business/Work/Study/Transit)</th>
                                <th className='text-xs font-semibold text-left py-2'>Month / Year / Duration in days</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='py-2'><input className='h-10 border rounded bg-[#F6F6F6]' /></td>
                                <td className='py-2'><input className='h-10 border rounded bg-[#F6F6F6]' /></td>
                            </tr>
                            <tr>
                                <td className='py-2'><input className='h-10 border rounded bg-[#F6F6F6]' /></td>
                                <td className='py-2'><input className='h-10 border rounded bg-[#F6F6F6]' /></td>
                            </tr>
                        </tbody>
                    </table> 
                </div> */}
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Have you ever been given medical treatment in the UK? If yes, give details (name of hospital, duration of stay etc.)</label>
                    <input className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Do you have a UK National Insurance number? If yes, state</label>
                    <input className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Do you have a UK driving license?</label>
                    <select className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>If Yes, Enter your license number</label>
                    <input className='h-11 border rounded bg-[#F6F6F6]' />
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Have you received any public funds (money) in the UK?</label>
                    <select className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='mb-6 flex flex-col'>
                    <label className='text-sm font-semibold mb-2'>Have you applied for leave to remain in the UK in the past 10 years?</label>
                    <select className='h-11 border rounded bg-[#F6F6F6]'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>


            </form>
        </section>
    )
}

export default StepOne;







