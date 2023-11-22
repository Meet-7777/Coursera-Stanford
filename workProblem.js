// Function to calculate the weight/length ratio for each job
function calculateRatio(weight, length) {
    return weight / length;
  }
  
  // Function to sort jobs based on their weight/length ratio in descending order
  function sortByRatio(jobs) {
    jobs.sort((a, b) => {
      const ratioA = calculateRatio(a.weight, a.length);
      const ratioB = calculateRatio(b.weight, b.length);
      return ratioB - ratioA;
    });
  }
  
  // Function to calculate the total completion time for jobs
  function calculateTotalCompletionTime(jobs) {
    let completionTime = 0;
    let totalCompletionTime = 0;
  
    for (const job of jobs) {
      completionTime += job.length;
      totalCompletionTime += completionTime * job.weight;
    }
  
    return totalCompletionTime;
  }
  
  // Example usage:
  const jobs = [
    { id: 'Job1', weight: 4, length: 3 },
    { id: 'Job2', weight: 2, length: 1 },
    { id: 'Job3', weight: 5, length: 2 },
    { id: 'Job4', weight: 8, length: 4 },
  ];
  
  sortByRatio(jobs);
  const totalCompletionTime = calculateTotalCompletionTime(jobs);
  
  console.log('Jobs sorted by weight/length ratio:');
  console.log(jobs);
  console.log('Total Completion Time:', totalCompletionTime);
  