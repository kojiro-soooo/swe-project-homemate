//
//  RegisterViewController.swift
//  HomemateLoginReg
//
//  Created by Ginger Schwarz on 10/10/21.
//

import UIKit

class RegisterViewController: UIViewController {

    @IBOutlet weak var usernameTextField: UITextField!
    
    
    @IBOutlet weak var emailTextField: UITextField!
    
    
    @IBOutlet weak var passwordTextField: UITextField!
    
    
    @IBOutlet weak var confirmpasswordTextField: UITextField!
    
    
    @IBOutlet weak var registerButton: UIButton!
    
    
    @IBOutlet weak var backButton: UIButton!
    
    
    
    @IBOutlet weak var AlreadyAccountButton: UIButton!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

    
    
    @IBAction func registerButtonTapped(_ sender: Any) {
    }
    
    

    @IBAction func backButtonTapped(_ sender: Any) {
    }
    
    
    
    @IBAction func alreadyaccountButtonTapped(_ sender: Any) {
    }
}
