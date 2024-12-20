const { Firestore } = require('@google-cloud/firestore');

const getAllData = async () => {
    const db = new Firestore({
        projectId: 'submissionmlgc-divasarasvati',
        keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        databaseId: 'predictions'
    });
  
    const predictCollection = db.collection('prediction');
  
    const snapshot = await predictCollection.orderBy('createdAt', 'desc').get();
  
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      history: doc.data(),
    }));
  
    return { data };
  };
  
  module.exports = getAllData;