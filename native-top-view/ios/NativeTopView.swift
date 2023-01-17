import ExpoModulesCore
import UIKit

class NativeTopView: ExpoView {
    let label = UILabel()
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        clipsToBounds = true
        label.translatesAutoresizingMaskIntoConstraints = false
        addSubview(label)
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false

        NSLayoutConstraint.activate([
            label.centerXAnchor.constraint(equalTo: centerXAnchor),
            label.centerYAnchor.constraint(equalTo: centerYAnchor)
        ])
        
        label.backgroundColor = .black
        label.textColor = .white
        label.text = "This is a native UILabel!!"
    }    
}


// import ExpoModulesCore

// // This view will be used as a native component. Make sure to inherit from `ExpoView`
// // to apply the proper styling (e.g. border radius and shadows).
// class NativeTopView: ExpoView {

// }
