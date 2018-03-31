class Comments::IndexSerializer < CommentSerializer
  attributes :id,
              :body,
              :username,
              :user_id,
              :created_at,
              :route_review_id
    def username
      object.user.username
    end

end
