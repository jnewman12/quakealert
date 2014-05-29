Quakealert::Application.routes.draw do
 root to: "home#index"

 get "/new" => "home#welcome" 

 get "/newer" => "home#newer"
end
