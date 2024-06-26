from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)
# load_model = pickle.load(open('/NPAfinal_model.sav', 'rb'))
load_model = pickle.load(open('D:/Professional/Other/Study/Fake News Detection/back-end/NPAfinal_model.sav', 'rb'))
    
@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/predicted", methods=['POST'])
def predicted():
    # FOR RENDING RESULT
    # input_news = request.form["news"]
    input_news = request.json.get('news')
    output = load_model.predict([input_news])
    return jsonify({'prediction': "The News is:{} ".format(output) })
    
    # return render_template('index.html', prediction_text='The News is: {}'.format(output))


if __name__ == "__main__":
    app.run(debug=True)
