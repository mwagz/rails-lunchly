class UsersController < ApplicationController
  def list_users
    users = [
      { name: 'Ron' },
      { name: 'Hermione' },
      { name: 'Harry' },
      { name: 'Tom' }
    ]
    render json: { users: users }
  end
end
