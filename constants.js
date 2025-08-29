
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"],
  ["divorce","i want divorce","what is divorce","how can i take divorce"],
  ["overspeed","highspeed","allegations for overspeeding","rash driving","high speed","overspeeding"],
  ["no helmet","riding without helmet","rules for riding without helmet"],
  ["no seatbelt","driving without seatbelt","fine for driving without seatbelt"],
  ["breach of contract","violation of contract"],
  ["defamation"],
  ["Infringement of Intellectual Property Rights","property rights"],
  ["domestic violence","harrasment of family members","teasing"],
  ["financial fraud","money lending"],
  ["cybercrimes","hacking","fraud","online fraud"],
  ["crimes against womens","women abuse","women bullying"],
  ["hit and run","damage and run","hit and run away","accident and run"],
  ["human trafficking"],
  ["medical malpractice","medical fraud","medicine misuse"],
  ["cyberbullying","online bullying"],
  ["sexual harrasment"],
  ["child abusing","abuse a child"],
  ["ragging","ragging in college",],
  ["dowry","forcing for dowry","encouraging dowry"],
  ["drink and drive"],
  ["driving without license"]
]


const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["I was created by Purvesh Tushar Kewal and Harish"],
  ["MY name is CRAI", "MY NAME IS CRAI"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["burger,pizza"],
  ["Bro!!!!!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["When filing for divorce, allegations aren't always necessary. In many jurisdictions, divorce can be granted on a no-fault basis, meaning neither party needs to prove wrongdoing by the other. This is often simpler and less contentious. However, in some cases, one party may allege fault grounds such as adultery, cruelty, abandonment, or substance abuse as reasons for the divorce. Each jurisdiction has its own laws regarding what constitutes grounds for divorce and how allegations must be proven. It's essential to consult with a legal expert who can advise on the specific requirements and implications in your situation"],
  ["Allegations for overspeeding in India involve driving at speeds exceeding the posted limits. Consequences may include fines, points on the driver's license, license suspension, court appearances, and vehicle impoundment, depending on the severity of the offense and local regulations."],
  ["Allegations for riding without a helmet in India typically result from violating traffic laws that mandate the use of helmets for motorcyclists and their passengers. Consequences may include fines, penalties, and in some cases, impounding of the vehicle. It's a serious offense due to the increased risk of head injuries in accidents."],
  [" driving without wearing a seatbelt is a traffic violation punishable by fines. The Motor Vehicles Act mandates the use of seatbelts for drivers and passengers in vehicles equipped with them. Offenders can be fined up to Rs. 1,000 for the first offense and Rs. 2,000 for subsequent offenses. Additionally, non-compliance can result in penalty points on the offender's driving license."],
  [" Occurs when one party fails to fulfill their obligations as specified in a legally binding agreement. Remedies typically include monetary damages to compensate for losses suffered due to the breach and sometimes specific performance, where the court orders the breaching party to fulfill their contractual obligations."],
  [" Occurs when one party fails to fulfill their obligations as specified in a legally binding agreement. Remedies typically include monetary damages to compensate for losses suffered due to the breach and sometimes specific performance, where the court orders the breaching party to fulfill their contractual obligations."],
  ["Occurs when someone violates the exclusive rights of the owner of intellectual property, such as patents, trademarks, copyrights, or trade secrets. Remedies for infringement can include injunctions to stop further infringement, monetary damages for losses suffered, and sometimes criminal penalties for willful infringement."],
  ["In India, allegations of domestic violence involve any act of physical, emotional, sexual, or economic abuse committed against a woman by someone within the domestic sphere, such as a spouse, family member, or intimate partner. The Protection of Women from Domestic Violence Act, 2005, provides legal recourse for victims, offering protection orders, residence orders, and monetary relief. Victims can file complaints with the police, seek assistance from Protection Officers or NGOs, or approach the courts for relief. The law aims to provide support and justice for victims of domestic violence, recognizing the importance of addressing this pervasive issue in Indian society."],
  ["Allegations of financial fraud in India involve various forms of deceptive or dishonest practices aimed at gaining financial advantage. Common types of financial fraud include embezzlement, bribery, corruption, money laundering, Ponzi schemes, insider trading, tax evasion, and accounting fraud. Perpetrators of financial fraud may include individuals, businesses, or even government officials. Victims of financial fraud suffer financial losses, damage to their reputation, and sometimes emotional distress. Regulatory bodies like the Securities and Exchange Board of India (SEBI), the Reserve Bank of India (RBI), and law enforcement agencies work to investigate and prosecute financial fraud cases, aiming to protect investors, consumers, and the integrity of the financial system. Penalties for financial fraud can include fines, imprisonment, and restitution orders to compensate victims for their losses."],
  ["Allegations of cybercrimes in India involve illegal activities conducted through digital means, often targeting individuals, businesses, or the government. Common types of cybercrimes include hacking, phishing, identity theft, online fraud, cyberbullying, spreading malware, ransomware attacks, and unauthorized access to computer systems or networks. Perpetrators of cybercrimes can be individuals, organized crime groups, or even state-sponsored actors. Victims of cybercrimes suffer financial losses, breaches of privacy, reputational damage, and sometimes emotional distress. Law enforcement agencies such as the Cyber Crime Investigation Cells, Central Bureau of Investigation (CBI), and state police cybercrime units work to investigate and prosecute cybercrime cases. Additionally, government agencies like the Computer Emergency Response Team-India (CERT-In) provide cybersecurity guidance and support to prevent cyberattacks and mitigate their impact. Cybersecurity laws such as the Information Technology (IT) Act, 2000, and its amendments, along with various regulations, aim to address cyber threats and protect individuals and organizations from online criminal activities. Penalties for cybercrimes can include fines, imprisonment, and restitution orders to compensate victims for their losses."],
  ["Allegations for crimes against women in India encompass a range of offenses that cause harm or violence to women based on their gender. These crimes include sexual harassment, assault, rape, dowry-related violence, domestic abuse, female infanticide, honor killings, trafficking, and acid attacks, among others. Perpetrators of crimes against women can be intimate partners, family members, acquaintances, or strangers. Victims of these crimes often face physical, psychological, and emotional trauma, as well as societal stigma and discrimination. Legal frameworks such as the Indian Penal Code, the Protection of Women from Domestic Violence Act, 2005, and various amendments aim to provide protection, support, and justice for women who are victims of these crimes. Law enforcement agencies, women's rights organizations, and support services work to investigate cases, provide assistance to survivors, and raise awareness to prevent such crimes. Despite efforts to combat crimes against women, challenges such as underreporting, societal attitudes, and gaps in implementation persist, highlighting the ongoing need for comprehensive strategies to address gender-based violence and promote gender equality."],
  ["In hit-and-run cases in India, allegations typically involve negligent driving leading to accidents with people or vehicles. Accusations center on failing to stop at the scene, neglecting aid to injured parties, and not reporting the incident. Consequences are severe, especially if injuries or fatalities result. Tampering with evidence or providing false information worsens legal repercussions. Such cases are treated seriously, often resulting in criminal charges like imprisonment and fines."],
  ["In India, human trafficking is addressed by the Trafficking of Persons (Prevention, Protection, and Rehabilitation) Bill, 2018. Offenders can face up to 10 years of imprisonment and fines ranging from ₹1 lakh to ₹5 lakhs."],
  ["In India, medical malpractice is governed by various laws, including the Consumer Protection Act, 2019. Doctors found guilty of medical negligence can face civil liability and compensation claims. Additionally, professional medical councils regulate malpractice cases."],
  ["Cyberbullying fines in India vary based on factors like the offense and severity, as per the Information Technology Act, 2000. Penalties can range from thousands to lakhs of rupees, decided by the court based on individual cases."],
  ["In India, the Prevention of Sexual Harassment of Women Act (2013) mandates employers to establish Internal Complaints Committees (ICCs) to address complaints. Fines for violations range from Rs. 10,000 to Rs. 50,000, with potential license cancellation for repeat offenders. Also,  Fines for these offenses may vary based on the severity and circumstances of each case, as determined by the court."],
  ["The fines and penalties under the Protection of Children from Sexual Offences (POCSO) Act in India vary based on the severity of the offense. Offenders may face imprisonment ranging from a minimum of three years to life imprisonment, along with fines determined by the court, depending on the circumstances of each case."],
  ["The fines and penalties for Prevention of Ragging in Educational Institutions in India vary based on the severity of the offense. Offenders may face imprisonment for up to two years and/or fines ranging from Rs. 1,000 to Rs. 10,000, depending on the nature of the ragging incident."],
  ["The Dowry Prohibition Act, 1961, criminalizes dowry-related practices. Offenders face up to 5 years in prison and a minimum fine of Rs. 15,000 or the dowry's value. Demanding dowry can lead to 6 months' imprisonment and a maximum fine of Rs. 10,000."],
  ["In India, driving under the influence carries serious consequences. Offenders face fines ranging from ₹2,000 to ₹10,000, with potential license suspension for months to years. Repeat offenses or accidents causing injury or death can lead to imprisonment, typically lasting from days to months. Legal proceedings are mandatory, adding to the offender's time and expenses. Vehicle impoundment and community service may also be ordered by the court. Overall, the penalties aim to deter drunk driving and promote road safety."],
  ["Driving without a license in India results in penalties such as fines ranging from ₹500 to ₹5,000. Repeat offenders or those driving commercial vehicles without a license face stricter penalties. Additionally, vehicles can be impounded until a valid license is produced. Legal proceedings are necessary, and offenders may have to appear in court. Strict enforcement aims to promote responsible driving and ensure road safety."]
  ]


const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]


