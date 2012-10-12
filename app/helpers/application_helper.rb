module ApplicationHelper
  def on_page?(controller_name, action_name)
    return true  if params[:controller] == controller_name && params[:action] == action_name
  end
end
