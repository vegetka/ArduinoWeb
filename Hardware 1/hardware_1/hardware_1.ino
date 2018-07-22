int switchButton = 2;

void setup() {
  Serial.begin(9600);
  pinMode(switchButton, INPUT);
}

void loop() {
  int buttonState = digitalRead(switchButton);
  if(buttonState == HIGH){
    Serial.print("1");
  }else{
    Serial.print("0");
  }
  delay(500);
}