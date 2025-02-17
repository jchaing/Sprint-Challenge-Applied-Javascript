// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = topic;

  return tab;
}

const topics = document.querySelector('.topics');

const makeTab = async url => {
  try {
    let res = await axios.get(url);
    res.data.topics.forEach(topic => {
      topics.appendChild(Tab(topic));
    });
  } catch (err) {
    console.log(err);
  }
};

makeTab('https://lambda-times-backend.herokuapp.com/topics');
