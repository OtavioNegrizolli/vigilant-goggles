// Declaration for 'Person' and its properties.
interface Person {
    name: string; // Full name of the person.
    birthDate: string; // Date of birth in YYYY-MM-DD format.
    gender: string; // Gender of the person.
    maritalStatus: string; // Marital status of the person.
    cpf: string; // CPF (Brazilian individual taxpayer registry) of the person.
    rg: string; // RG (General Registry) of the person.
    social: Social[]; // List of social contacts, such as phone numbers or emails.
    address: Address; // Address information of the person.
    employeeData: EmployeeData; // Employment-related information.
    additionalData: AdditionalData; // Additional information about the person's qualifications, skills, and experience.
}

// Declaration for 'Social' and its properties.
interface Social {
    type: string; // Type of contact (e.g., "phone", "email").
    value: string; // Value of the contact (e.g., phone number or email address).
}

// Declaration for 'Degree' and its properties.
interface Degree {
    title: string; // Title of the degree (e.g., "Bachelor's in Computer Science").
    course: string; // Course of study.
    graduationDate: string; // Date of graduation.
    institution: string; // Institution where the degree was earned.
}

// Declaration for 'ProfessionalExperience' and its properties.
interface ProfessionalExperience {
    companyName: string; // Name of the company where the person worked.
    roleName: string; // Name of the role held by the person.
    since: string; // Start date of the role.
    until?: string; // End date of the role (if applicable).
}

// Declaration for 'ExtensionCourse' and its properties.
interface ExtensionCourse {
    name: string; // Name of the course.
    date: string; // Date the course was completed.
    institution: string; // Institution where the course was taken.
    certifiedHours: string; // Number of certified hours completed.
}

// Declaration for 'EmployeeData' and its properties.
interface EmployeeData {
    admissionDate: string; // Date of admission to the company.
    dismissalDate?: string; // Date of dismissal from the company (if applicable).
    registrationNumber: string; // Employee's registration number.
    office: Office[]; // List of offices the employee has held.
    role: Role[]; // List of roles the employee has held.
    journey: Journey[]; // Information about the employee's work schedule.
    benefits: Benefit[]; // List of benefits associated with the employee.
}

// Declaration for 'Address' and its properties.
interface Address {
    zip: string; // Zip code of the address.
    state: string; // State of the address.
    city: string; // City of the address.
    neighborhood: string; // Neighborhood of the address.
    street: string; // Street name of the address.
    number: string; // Street number of the address.
    complement?: string; // Additional address details (e.g., apartment, suite).
}

// Declaration for 'Benefit' and its properties.
interface Benefit {
    type: string; // Type of benefit (e.g., "health insurance", "meal voucher").
    value: string; // Value of the benefit.
}

// Declaration for 'Role' and its properties.
interface Role {
    roleName: string; // Name of the professional role.
    salary: string; // Salary for the role.
    since: string; // Start date of the role.
    until?: string; // End date of the role (if applicable).
}

// Declaration for 'Office' and its properties.
interface Office {
    name: string; // Name of the office.
    since: string; // Start date of the office.
    until?: string; // End date of the office (if applicable).
}

// Declaration for 'Journey' and its properties.
interface Journey {
    workDays: string; // Days of the week the employee works.
    startTime: string; // Start time of the workday.
    departureTime: string; // End time of the workday.
    since: string; // Start date of this work schedule.
    until?: string; // End date of this work schedule (if applicable).
}

// Declaration for 'AdditionalData' and its properties.
interface AdditionalData {
    degree: Degree[]; // List of degrees the person has earned.
    skills: string[]; // List of skills the person possesses.
    professionalExperience: ProfessionalExperience[]; // List of the person's prior work experiences.
    extensionCourses: ExtensionCourse[]; // List of extension courses the person has completed.
}
