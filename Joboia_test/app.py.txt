from flask import Flask, render_template, request, jsonify
from core.llm_integration import LLMIntegration

app = Flask(__name__)
llm = LLMIntegration()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    response = llm.get_code_suggestions(user_message)
    return jsonify({"response": response})


if __name__ == "__main__":
    app.run(debug=True)