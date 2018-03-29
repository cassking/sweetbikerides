class CommentSerializer < ActiveModel::Serializer
  attributes :id,
              :body,
              :username,
              :route_review_id
    def username
      object.user.username
    end

end
