const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    try {
        const model = await tf.loadGraphModel('https://storage.googleapis.com/bucket-submissionmlgc-divasarasvati/submissions-model/model.json');
        console.log('Model successfully loaded');
        return model;
    } catch (error) {
        console.error('Failed to load model:', error);
        throw new Error('Model could not be loaded');
    }
}

module.exports = loadModel;