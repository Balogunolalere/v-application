// import { Document, Model, model, Schema } from "mongoose";

// export interface IShortURL extends Document {
//     fullUrl: string;
//     short: string;
//     clicks: number;
// }

const visaApplicationSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        otherNames: {
            type: String
        },
        relationshipStatus: {
            type: String,
            enum: ['single', 'married', 'divorced', 'widowed', 'separated', 'other'],
            default: ''
        },
        address: {
            type: String
        },
        correspondenceAddress: {
            type: String,
            enum: ['yes', 'no'],
            default: ''
        },
        homeOwnershipStatus: {
            type: String
        },
        passportNumber: {
            type: String
        },
        issuingAuthority: {
            type: String
        },
        issueDate: {
            type: Date
        },
        expiryDate: {
            type: Date
        },
        nin: {
            type: String
        },
        nationality: {
            type: String
        },
        countryOfBirth: {
            type: String
        },
        placeOfBirth: {
            type: String
        },
        dateOfBirth: {
            type: Date
        },
        otherNationality: {
            type: String
        },
        employmentStatus: {
            type: String,
            enum: ['employed', 'self-employed', 'student', 'retired', 'unemployed'],
            default: ''
        },
        jobTitle: {
            type: String
        },
        monthlyEarnings: {
            type: String
        },
        jobDescription: {
            type: String
        },
        otherIncome: {
            type: String
        },
        employerDetails: {
            type: String
        },
        plannedSpending: {
            type: String
        },
        totalMonthlySpending: {
            type: String
        },
        payingTowardsVisit: {
            type: String,
            enum: ['yes', 'no'],
            default: ''
        },
        payerRelationship: {
            type: String
        },
        payerDetails: {
            type: String
        },
        payerAmount: {
            type: String
        },
        payerReason: {
            type: String
        },
        arrivalDateUK: {
            type: Date
        },
        preferredLanguage: {
            type: String,
            enum: ['english', 'other']
        },
        visitReason: {
            type: String,
            enum: ['tourism', 'medical', 'business']
        },
        holidayReason: {
            type: String,
            enum: ['tourism', 'visiting friends', 'visiting family']
        },
        visitDetails: {
            type: String
        },
        financialSupport: {
            type: String,
            enum: ['yes', 'no']
        },
        dependentRelationship: {
            type: String
        },
        dependentNames: {
            type: String
        },
        dependentDateOfBirth: {
            type: Date
        },
        dependentResidence: {
            type: String
        },
        dependentTravel: {
            type: String
        },
        parent1GivenNamesandFamilyNames: {
            type: String
        },
        parent1DateOfBirth: {
            type: Date
        },
        parent1Nationality: {
            type: String
        },
        dependentSameNationality: {
            type: String,
            enum: ['yes', 'no']
        },
        parent2GivenNamesandFamilyNames: {
            type: String
        },
        parent2DateOfBirth: {
            type: Date
        },
        parent2Nationality: {
            type: String
        },
        parent2SameNationality: {
            type: String,
            enum: ['yes', 'no']
        },
        hasFamilyInUK: {
            type: String,
            enum: ['yes', 'no']
        },
        familyRelationship: {
            type: String
        },
        familyName: {
            type: String
        },
        familyNationality: {
            type: String
        },
        familyPermissionToUK: {
            type: String
        },
        familyPassportNumber: {
            type: String
        },
        travelingWithGroup: {
            type: String,
            enum: ['yes', 'no']
        },
        groupCompanyName: {
            type: String
        },
        travelingWithNonPartner: {
            type: String,
            enum: ['yes', 'no']
        },
        nonPartnerRelationship: {
            type: String
        },
        nonPartnerName: {
            type: String
        },
        nonPartnerNationality: {
            type: String
        },
        hasAddressInUK: {
            type: String,
            enum: ['yes', 'no']
        },
        plannedStayLocation: {
            type: String
        },
        plannedStayAddress: {
            type: String
        },
        plannedArrivalDate: {
            type: Date
        },
        plannedDepartureDate: {
            type: Date
        },
        hadUKVisaInPast10Years: {
            type: String,
            enum: ['yes', 'no']
        },
        pastVisaIssueDate: {
            type: Date
        },
        visitedUKInPast10Years: {
            type: String,
            enum: ['yes', 'no']
        },
        numberOfVisitsInPast10Years: {
            type: Number
        },
        medicalTreatmentDetails: {
            type: String
        },
        hasNationalInsuranceNumber: {
            type: String
        },
        drivingLicense: {
            type: String,
            enum: ['yes', 'no']
        },
        licenseNumber: {
            type: String
        },
        receivedPublicFunds: {
            type: String,
            enum: ['yes', 'no']
        },
        appliedForLeaveToRemain: {
            type: String,
            enum: ['yes', 'no']
        },
        visitFrequency: {
            type: String,
            enum: ['0', '2-5', '5+']
        },
        visitedCountries: {
            type: String,
            enum: ['yes', 'no']
        },
        refusedVisa: {
            type: String,
            enum: ['yes', 'no']
        },
        refusedEntry: {
            type: String,
            enum: ['yes', 'no']
        },
        refusedPermission: {
            type: String,
            enum: ['yes', 'no']
        },
        refusedAsylum: {
            type: String,
            enum: ['yes', 'no']
        },
        deported: {
            type: String,
            enum: ['yes', 'no']
        },
        removed: {
            type: String,
            enum: ['yes', 'no']
        },
        requiredToLeave: {
            type: String,
            enum: ['yes', 'no']
        },
        excludedOrBanned: {
            type: String,
            enum: ['yes', 'no']
        },
        details: {
            type: String,
            enum: [
                'refused a visa',
                'refused entry at the border',
                'refused permission to stay or remain',
                'refused asylum',
                'deported',
                'removed',
                'required to leave',
                'excluded or banned from entry'
            ]
        },
        country: {
            type: String
        },
        immigrationProblemDate: {
            type: Date
        },
        immigrationProblemDetails: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const VisaApplication = model("VisaApplication", visaApplicationSchema);

export default VisaApplication;
