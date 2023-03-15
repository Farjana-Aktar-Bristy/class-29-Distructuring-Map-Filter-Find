class support {
    name;
    designation = 'Support web team';
    address = 'Bangladesh';
    jobId = 16060;
    constructor(name, address, jobId) {
        this.name = name;
        this.address = address;
        this.jobId = jobId;
    }
}

const bristy = new support('Farjana_Bristy', 'Dhaka');
console.log(bristy);

const arisha = new support('Arisha_Hasan', 'Khulna', 11014);
console.log(arisha);

// A constructor is a special function that creates and initializes an object instance of a class.
// In JavaScript, a constructor gets called when an object is created using the new keyword.