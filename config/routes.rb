Quakealert::Application.routes.draw do
 root to: "home#index"

 get "/new" => "home#welcome" 
end
