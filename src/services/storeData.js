const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-divasarasvati',
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      databaseId: 'predictions'
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;