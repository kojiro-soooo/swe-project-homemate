//
//  SignInViewController.swift
//  HomemateLoginReg
//
//  Created by Ginger Schwarz on 10/10/21.
//

import UIKit

class SignInViewController: UIViewController {

    
    
    @IBOutlet weak var emailTextField: UITextField!
    
    
    
    @IBOutlet weak var passwordTextField: UITextField!
    
    
    
    @IBOutlet weak var signinButton: UIButton!
    
    
    
    @IBOutlet weak var backButton: UIButton!
    
    
    @IBOutlet weak var noaccountButton: UIButton!
    
    
    
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

    
    @IBAction func signinButtonTapped(_ sender: Any) {
    }
    
    

    @IBAction func backButtonTapped(_ sender: Any) {
    }
    
    
    
    @IBAction func noaccountButtonTapped(_ sender: Any) {
    }
    
}
